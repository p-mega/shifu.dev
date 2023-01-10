import { translate } from '@docusaurus/Translate'
import React from 'react'
import Layout from '@theme/Layout'
import styles from './styles.module.scss'
import common from '@site/src/css/common.module.scss'

export function Backbtn() {
  return (
    <a href="/deployment">
      <svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.7998 1.7998L2.1998 12.9998L11.7998 24.1998" stroke="#399BFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      back
    </a>
  )
}
export default function Company() {
  return (
    <Layout>
      <div className={styles.pageoutbox}>
        <img className={styles.bookingimg} src={require('@site/static/img/home/banner.png').default} alt="" />

        <div className={styles.pagebox}>
          <div className={styles.pagecontent}>
            {/* <Backbtn></Backbtn> */}
            <div className={styles.title}>{translate({ message: 'Kindly register for a Shifu Cloud Demo' })}</div>
            <div className={styles.textbox}>
              <p>
                {translate({
                  message: `Hello! Thank you for your interest and support in Shifu Cloud.`
                })}
              </p>
              <p>
                {translate({
                  message: `In order to help you quickly get started with Shifu Cloud, we have arranged a 30-minute online demonstration for each user. Our team will walk you through the specific operations of Shifu Cloud and answer any questions you may have. Please schedule your service and time through the following methods.`
                })}
              </p>
              <p>
                {translate({
                  message: `We will confirm your appointment via email and look forward to further communication with you!`
                })}
              </p>
            </div>

            <iframe className={styles.bookingFream} src="https://calendly.com/shifu-demo/30min" frameBorder="0">
              loading...
            </iframe>
          </div>
        </div>
      </div>
    </Layout>
  )
}
