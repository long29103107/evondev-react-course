// external imports
import slugify from 'slugify';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  where,
} from 'firebase/firestore';

//component imports
import Toggle from '@/components/toggle/Toggle';
import ImageUpload from '@/components/image/ImageUpload';
import { Radio } from '@/components/checkbox';
import { Label } from '@/components/label';
import { Input } from '@/components/input';
import { Field, FieldCheckboxes } from '@/components/field';
import { Dropdown } from '@/components/dropdown';
import { Button } from '@/components/button';

//utils imports
import { db } from '@/firebase-app/firebase-config';
import { postStatus } from '@/utils/constants';
import DashboardHeading from '@/module/dashboard/DashboardHeading';
import useUploadcareImage from '@/hooks/useUploadcareImage';
import useAuth from '@/hooks/useAuth';

const PostAddNew = () => {
  const { control, watch, setValue, handleSubmit, getValues, reset } = useForm({
    mode: 'onChange',
    defaultValues: {
      title: '',
      slug: '',
      status: 2,
      hot: false,
      image: '',
      category: {},
      user: {},
    },
  });
  const watchStatus = watch('status');
  const watchHot = watch('hot');
  const {
    image,
    fileId,
    handleResetUpload,
    progress,
    handleSelectImage,
    handleDeleteImage,
    handleClickImage,
  } = useUploadcareImage(setValue, getValues);
  const [categories, setCategories] = useState([]);
  const [selectCategory, setSelectCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const { userInfo } = useAuth();
  useEffect(
    () => async () => {
      const fetchUserData = async () => {
        if (!userInfo?.email) return;
        const q = query(collection(db, 'users'), where('email', '==', userInfo.email));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setValue('user', {
            id: doc.id,
            ...doc.data(),
          });
        });
      };
      fetchUserData();
    },
    [userInfo?.email, setValue],
  );
  const addPostHandler = async (values) => {
    setLoading(true);
    try {
      const cloneValues = { ...values };
      cloneValues.slug = slugify(values.slug || values.title, { lower: true });
      cloneValues.status = Number(values.status);
      const colRef = collection(db, 'posts');
      await addDoc(colRef, {
        ...cloneValues,
        fileId,
        createdAt: serverTimestamp(),
      });
      toast.success('Create new post successfully!');
      reset({
        title: '',
        slug: '',
        status: 2,
        category: {},
        hot: false,
        fileId: '',
        user: {},
      });
      handleResetUpload();
      setSelectCategory({});
    } catch ({ message }) {
      console.log('Error', message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    async function getData() {
      const colRef = collection(db, 'categories');
      const q = query(colRef, where('status', '==', 1));
      const querySnapshot = await getDocs(q);
      let result = [];
      querySnapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setCategories(result);
    }
    getData();
  }, []);

  useEffect(() => {
    document.title = 'Monkey Blogging - Add new post';
  }, []);

  const handleClickOption = async (item) => {
    const colRef = doc(db, 'categories', item.id);
    const docData = await getDoc(colRef);
    setValue('category', {
      id: docData.id,
      ...docData.data(),
    });
    setSelectCategory(item);
  };

  return (
    <>
      <DashboardHeading title="Add post" desc="Add new post" />
      <form onSubmit={handleSubmit(addPostHandler)}>
        <div className="form-layout">
          <Field>
            <Label requiredField={true}>Title</Label>
            <Input control={control} placeholder="Enter your title" name="title" required />
          </Field>
          <Field>
            <Label requiredField={true}>Slug</Label>
            <Input control={control} placeholder="Enter your slug" name="slug" />
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label required>Image</Label>
            <ImageUpload
              onChange={handleSelectImage}
              onClick={handleClickImage}
              handleDeleteImage={handleDeleteImage}
              className="h-[250px]"
              progress={progress}
              image={image}
              previewImage={'204x192'}
            />
          </Field>
          <Field>
            <Label requiredField={true}>Category</Label>
            <Dropdown>
              <Dropdown.Select placeholder={selectCategory?.name || 'Select the category'} />
              <Dropdown.List>
                {categories.length > 0 &&
                  categories.map((item) => (
                    <Dropdown.Option key={item.id} onClick={() => handleClickOption(item)}>
                      {item.name}
                    </Dropdown.Option>
                  ))}
              </Dropdown.List>
            </Dropdown>
            {selectCategory?.name && (
              <span className="inline-block p-3 text-sm font-medium text-green-600 rounded-lg bg-green-50">
                {selectCategory?.name}
              </span>
            )}
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Feature post</Label>
            <Toggle on={watchHot === true} onClick={() => setValue('hot', !watchHot)} />
          </Field>
          <Field>
            <Label requiredField={true}>Status</Label>
            <FieldCheckboxes>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === postStatus.APPROVED}
                value={postStatus.APPROVED}
              >
                Approved
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === postStatus.PENDING}
                value={postStatus.PENDING}
              >
                Pending
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === postStatus.REJECTED}
                value={postStatus.REJECTED}
              >
                Reject
              </Radio>
            </FieldCheckboxes>
          </Field>
        </div>
        <Button type="submit" className="mx-auto w-[250px]" isLoading={loading} disabled={loading}>
          Add new post
        </Button>
      </form>
    </>
  );
};

export default PostAddNew;
