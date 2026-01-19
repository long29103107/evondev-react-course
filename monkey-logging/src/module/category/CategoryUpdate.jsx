import { Button } from '@/components/button';
import { Radio } from '@/components/checkbox';
import { Field } from '@/components/field';
import { Input } from '@/components/input';
import { Label } from '@/components/label';
import DashboardHeading from '@/module/dashboard/DashboardHeading';
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';
import slugify from 'slugify';
import { categoryStatus } from '@/utils/constants';
import { useWatch } from 'react-hook-form';
import { useDocument } from '@/hooks/useDocument';
import { useEffect } from 'react';
import { useFirestoreActions } from '@/hooks/useFirestoreActions';
import { serverTimestamp } from 'firebase/firestore';

const CategoryUpdate = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm({
    mode: 'onChange',
    defaultValues: {},
  });

  const navigate = useNavigate();
  const [params] = useSearchParams();
  const categoryId = params.get('id');
  const { data: category, isLoading, error } = useDocument('categories', categoryId);
  const { update: updateCategory } = useFirestoreActions('categories');

  const watchStatus = useWatch({
    control,
    name: "status",
  });

  useEffect(() => {
    if (!isLoading && error && !category) {
      navigate('/manage/category');
    }
    reset(category);
  }, [isLoading, error, navigate, category, reset]);

  const handleUpdateCategory = async (values) => {
    var newCategory = {
      name: values.name,
      slug: slugify(values.slug || values.name, { lower: true }),
      status: Number(values.status),
      updatedAt: serverTimestamp(),
    }
    await updateCategory(categoryId, newCategory);
   
    navigate('/manage/category');
  };
  
  return (
    <div>
      <DashboardHeading
        title="Update category"
        desc={`Update your category id: ${categoryId}`}
      />
      <form onSubmit={handleSubmit(handleUpdateCategory)}>
        <div className="form-layout">
          <Field>
            <Label>Name</Label>
            <Input control={control} name="name" placeholder="Enter your category name" />
          </Field>
          <Field>
            <Label>Slug</Label>
            <Input control={control} name="slug" placeholder="Enter your slug" />
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Status</Label>
            <div className="flex flex-wrap gap-x-5">
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === categoryStatus.APPROVED}
                value={categoryStatus.APPROVED}
              >
                Approved
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === categoryStatus.UNAPPROVED}
                value={categoryStatus.UNAPPROVED}
              >
                Unapproved
              </Radio>
            </div>
          </Field>
        </div>
        <Button
          kind="primary"
          className="mx-auto w-[200px]"
          type="submit"
          disabled={isSubmitting}
          isLoading={isSubmitting || isLoading}
        >
          Update category
        </Button>
      </form>
    </div>
  );
};

export default CategoryUpdate;