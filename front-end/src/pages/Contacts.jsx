import React, { useState } from 'react'
import emailjs from 'emailjs-com'

import Helmet from '../components/Helmet'

import { Link } from 'react-router-dom'

import Grid from '../components/Grid'
import contactContent from '../content/contactContent'

const Contacts = () => {
  function submit(e) {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_0xj83er',
        'template_miid4ez',
        e.target,
        'user_l1Rc4dzYn9uLhwGRrOWny'
      )
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))

    document.getElementById('create-course-form').reset()
  }

  return (
    <Helmet title="Liên Hệ">
      <section>
        <Grid col={2} mdCol={2} smCol={1} gap={25}>
          <div className="support-contact__wrapper">
            <img
              className="support-contact__wrapper__img"
              src="./images/img_contact/image_contact.jpg"
              alt=""
            />
          </div>

          <div className="support-contact__title">
            <h4 className="support-contact__title__first">Contact</h4>
            <h4 className="support-contact__title__second">With</h4>
            <h4 className="support-contact__title__third">Us</h4>
          </div>
        </Grid>
      </section>

      <section style={{ marginTop: '50px' }}>
        <Grid col={2} mdCol={2} smCol={1} gap={20}>
          <div className="support-contact__content">
            {contactContent.map((item, index) => (
              <div key={index}>
                <div
                  className="support-contact__content__title"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />

                <div
                  className="support-contact__content__intro"
                  dangerouslySetInnerHTML={{ __html: item.description1 }}
                />

                <div
                  className="support-contact__content__text"
                  dangerouslySetInnerHTML={{ __html: item.description2 }}
                />
              </div>
            ))}
          </div>

          <div className="support-contact__wrapper">
            <img
              className="support-contact__wrapper__img"
              src="./images/img_contact/image2_contact.jpg"
              alt=""
            />
          </div>
        </Grid>
      </section>

      <section style={{ marginTop: '50px' }}>
        <Grid col={2} mdCol={2} smCol={1} gap={20}>
          <div className="left_third">
            <h1 style={{ marginLeft: '50px' }} className="CONTENT_TITLE">
              Thông Tin Liên Hệ
            </h1>

            <p className="ICON">
              <i className="bx bxs-phone" style={{ marginRight: '10px' }}></i>{' '}
              số điện thoại:{' '}
              <Link
                to={{ pathname: 'tel:+0326626065' }}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: 'red',
                  textDecoration: 'none',
                  textAlign: 'center',
                }}
              >
                0326626065
              </Link>
            </p>

            <p className="ICON">
              <i
                className="bx bx-mail-send"
                style={{ marginRight: '10px' }}
              ></i>{' '}
              <Link
                to={{ pathname: 'mailto:admeloria@gmail.com' }}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none' }}
              >
                admeloria1829@gmail.com
              </Link>
            </p>
            <p className="ICON">
              <i className="bx bxs-map" style={{ marginRight: '10px' }}></i>
              <a
                href="https://goo.gl/maps/qwb9h7XsBw5GXZ337"
                target="_blank"
                rel="noreferrer"
              >
                211/2b đường Gò Xoài, phường Bình Hưng Hoà A, quận Bình Tân
              </a>
            </p>

            <p className="ICON">
              <i className="bx bx-globe" style={{ marginRight: '10px' }}></i>{' '}
              <Link
                to={{ pathname: 'mailto:admeloria@gmail.com' }}
                style={{ textDecoration: 'none' }}
              >
                admeloria.com
              </Link>
            </p>
            <p className="ICON">
              <i className="bx bx-time" style={{ marginRight: '10px' }}></i> thứ
              2 đến chủ nhật từ 9h đến 21h
            </p>
          </div>

          <div className="support-contact__feedback">
            <h1 className="support-contact__feedback__title">
              Gửi thắc mắc cho chúng tôi
            </h1>
            <h4 className="support-contact__feedback__content">
              Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng
              tôi sẽ liên lạc lại với bạn sớm nhất có thể{' '}
            </h4>

            <form onSubmit={submit} id="create-course-form">
              <div style={{ marginTop: '20px' }}>
                <input
                  className="input-full-col"
                  placeholder="Tên Của Bạn ....."
                  type="text"
                  name="name"
                ></input>
              </div>
              <div style={{ marginTop: '20px' }}>
                <input
                  className="input-2-col"
                  placeholder="Số Điện Thoại Của Bạn...."
                  type="text"
                  name="phone"
                ></input>
                <input
                  className="input-2-col"
                  placeholder="Email Của Bạn...."
                  type="text"
                  name="email"
                ></input>
              </div>

              <div style={{ marginTop: '20px' }}>
                <input
                  id="content"
                  className="input-full-col"
                  placeholder="Nội Dung...."
                  type="text"
                  name="message"
                ></input>
              </div>

              <div style={{ marginTop: '20px' }}>
                <button className="support-contact__feedback__btn">
                  Gửi Cho Chúng Tôi
                </button>
              </div>
            </form>
          </div>
        </Grid>
      </section>
      <section style={{ marginTop: '80px' }}>
        <Grid col={1}>
          <div>
            <img
              className="background-img-a"
              src="./images/img_contact/img1_end.jpg"
              alt=""
            />
            <img
              className="background-img-b"
              src="./images/img_contact/img2_end.jpg"
              alt=""
            />
          </div>
        </Grid>
      </section>
    </Helmet>
  )
}

export default Contacts
