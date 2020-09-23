import React from 'react';

import { Component } from 'react';
import Button from 'react-bootstrap/Button'

export default class Footer extends Component {
    render() {

        return (

            <footer>
                <div className="greyBar">
                    <div className="container">
                        <div className="irang">ایرانگان | بانک اطلاعات مشاغل و کسب و کارها
                        </div>
                        <ul className="itemContac">
                            <li>info@irangan.com</li>
                            <li>اس‌ام‌اس 30006425</li>
                            <li>تلفن 6425 - 021</li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <div className="rightSection">
                        <div>ایرانگان
                            <ul>
                                <li>درباره ایرانگان</li>
                                <li>سوالات متداول</li>

                            </ul>
                        </div>
                        <div>خدمات مشتریان
                            <ul>
                                <li>سفارش آگهی</li>

                            </ul>
                        </div>
                        <div>
                            فرصت‌های شغلی
                            <ul>
                                <li>
                                    مشاور بازاریابی
                                </li>
                                <li>
                                    حریم خصوصی
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="leftSection">
                        <input type="text" name="email" aria-label="ایمیل" placeholder="آدرس ایمیل خود را وارد کنید" />
                        <Button variant="primary" size="sm">ثبت</Button>
                    </div>
                </div>
            </footer>
        )
    }

}