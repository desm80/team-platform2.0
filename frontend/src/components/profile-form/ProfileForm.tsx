import React from 'react';
import {InputPhoneTemplate} from '../UI/phone-input-template/InputPhoneTemplate';
import {ProfileSectionTitle} from 'src/components/profile-section-title/ProfileSectionTitle';
// import { ProfileMenu } from 'src/components/profile-menu/ProfileMenu';
import { Input } from '../UI/input-template/InputTemplate';
import { InputType,  InputName} from "src/typings/constants";
import styles from "./ProfileForm.module.scss";
import userAvatar from 'src/assets/framed-avatar.svg';
import {helperTexts} from 'utils/validation/helperTexts';
import { useForm } from "react-hook-form";
import { RegisterRequestData } from "src/services/api/types";

export function ProfileForm(): React.ReactNode {
  const {
    register,
    reset,
    control,
    handleSubmit,
    getFieldState,
    formState: {errors}
  } = useForm<RegisterRequestData>(
    {mode: 'onChange', criteriaMode: 'all'}
  );

  return (
    <>
      <section className={styles.profile__section}>
        <ProfileSectionTitle
          subtitle="Фото профиля"
          description="По&nbsp;реальной фотографии коллеги смогут легко узнать вас"
        />
        <form className={styles.profile__form_photo}>
          <img className={styles.profile__img} alt='Фото' src={userAvatar}/>
          <div className={styles.profile__buttons}>
            <button className={styles.profile__button_blue}>Загрузить фотографию</button>
          </div>
        </form>
      </section>

      <section className={styles.profile__section}>
        <ProfileSectionTitle
          subtitle="Личные данные"
          description="Эта информация будет доступна всем участникам проекта"
        />
        <form className={styles.profile__form_data}>
          <Input
            type={InputType.TEXT}
            name={InputName.FIRST_NAME}
            label='Имя'
            placeholder='Иван'
            register={register}
            errors={errors}
          />
          <Input
            type={InputType.TEXT}
            name={InputName.SECOND_NAME}
            label='Фамилия'
            placeholder='Иванов'
            register={register}
            errors={errors}
          />
          <Input
            type={InputType.TEXT}
            name={InputName.JOB_TITLE}
            label='Должность'
            placeholder='Ваша должность'
            register={register}
            errors={errors}
          />
          <Input
            type={InputType.EMAIL}
            name={InputName.EMAIL}
            label='Email'
            placeholder='example@site.mail'
            register={register}
            errors={errors}
          />
          <InputPhoneTemplate
            label='Телефон'
          />
        </form>
      </section>
      <section className={styles.profile__section}>
        <ProfileSectionTitle
          subtitle='Доступность'
          description='Текущая локация и&nbsp;актуальный график работы помогут точнее расчитать пересечение команды'
        />
        <form className={styles.profile__form}>
          <Input
            type={InputType.TEXT}
            name={InputName.TIMEZONE}
            label='Локация'
            placeholder='Санкт-Петербург (UTC+3)'
            register={register}
            errors={errors}
          />
          <Input
            // TODO: InputType.SELECT
            type={InputType.TEXT}
            name='schedule'
            label='График работы'
            register={register}
            errors={errors}
          />
        </form>
      </section>

      <section className={styles.profile__section}>
        <ProfileSectionTitle
          subtitle='Смена пароля'
          description='На ваш email сразу придет ссылка для смены пароля'
        />
        <form className={styles.profile__form}>
          <Input
            type={InputType.PASSWORD}
            name={InputName.PASSWORD}
            label='Текущий пароль'
            register={register}
            errors={errors}
          />
          <Input
            type={InputType.PASSWORD}
            name={InputName.NEW_PASSWORD}
            label='Новый пароль'
            helperText={helperTexts.PASSWORD}
            register={register}
            errors={errors}
          />
          <Input
            type={InputType.PASSWORD}
            name={InputName.CONFIRM_PASSWORD}
            label='Повторите новый пароль'
            register={register}
            errors={errors}
          />
          <button className={styles['profile__button_light-blue']}>Сменить пароль</button>
        </form>
      </section>
    </>
  )
}
