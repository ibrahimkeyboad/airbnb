'use client';

import { signIn } from 'next-auth/react';

import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../input/Input';
import { toast } from 'react-hot-toast';
import Button from '../Button';
import useLoginStore from '@/hooks/useLoginStore';
import { useRouter } from 'next/navigation';

function LoginModal() {
  const loginModal = useLoginStore();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    try {
      const res = await signIn('credentials', {
        ...data,
        redirect: false,
      });

      if (res?.ok) {
        setIsLoading(false);
        loginModal.onClose();
        toast.success('logged in');
        router.refresh();
      }
    } catch (error: any) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading title='Welcome to back' subtitle='Login to your account' />

      <Input
        id='email'
        label='Email'
        disable={isLoading}
        register={register}
        errors={errors}
        required
        type='email'
      />
      <Input
        id='password'
        label='Password'
        disable={isLoading}
        register={register}
        errors={errors}
        type='password'
        required
      />
    </div>
  );

  const footerContent = (
    <div className='flex flex-col gap-4 mt-3'>
      <hr />
      <Button
        outline
        label='Continue with Google'
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Button
        outline
        label='Continue with Github'
        icon={AiFillGithub}
        onClick={() => {}}
      />
      <p className='justify-center flex items-center gap-2 text-neutral-600 text-center font-light'>
        <span>Already have an account?</span>
        <span className='text-neutral-900 cursor-pointer hover:underline'>
          Log in
        </span>
      </p>
    </div>
  );
  return (
    <Modal
      disable={isLoading}
      isOpen={loginModal.isOpen}
      title='Register'
      actionLabel='Continue'
      onClose={loginModal.onClose}
      onSubmint={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default LoginModal;
