import React, { Component } from 'react'
import Global from "../Global"
import './Services.scss';



function ServiceItem(props) {
    return (
        <div className="col-12 col-md-4 item">
            <div className="title-icon">
                <i className={`fa ${props.icon} icon`}></i>
                <h3 className="name">{props.title}</h3>
            </div>
            <p className="description">{props.desc}</p>
        </div>
    )
}
export default class Services extends Component {
    render() {
        return (
            <section className="services p-50 bg-section" id="Services">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Global.SectionHeader className="text-center" title="خدمات<span> الهيئة </span>" desc="ستمارس الهيئة سلطتها عبر عدد من محاور العمل الرامية إلى تحقيق هدفها في التطوير الشامل، ويتوقع وفق الهيئات القائمة أن تتضمن مهام الهيئة" />
                        </div>
                    </div>
                    <div className="row">
                        <ServiceItem icon="fa-gears" title="التطوير" desc="وضع سياسة عامة لتطوير وتنمية المنطقة.استثمار وتنفيذ ما ترى من مشاريع استثمارية وخدمية بالمنطقةإنشاء مراكز متخصصة للتخطيط والدراسات" />
                        <ServiceItem icon="icofont icofont-calculations" title="التخطيط" desc="رسم الخطط وإعداد الدراسات والمخططات الاستراتيجية الشاملة. إعداد الدراسات السكانية والعمرانية في المنطقةإعداد دراسات المخطط الإستراتيجي للمنطقة" />
                        <ServiceItem icon="fa-binoculars" title="المتابعة" desc="متابعة البرامج والإشراف على المشروعات. العمل على جذب رؤوس الأموال الوطنية والأجنبية لاستثمارها في المنطقة" />
                        <ServiceItem icon="fa-building" title="التنسيق" desc="التنسيق مع الأجهزة المعنية لمتابعة تخطيط مشروعات البنية الأساسية. التنسيق والمتابعة للبرامج التطويرية التي يندرج تنفيذها ضمن مسؤولية جهة حكومية أو أكثر" />
                        <ServiceItem icon="fa-check-square-o" title="التنفيذ" desc="تنفيذ البرامج والمشروعات حسب الأولويات. استثمار وتنفيذ ما ترى من مشاريع استثمارية وخدمية بالمنطقة" />
                        <ServiceItem icon="icofont icofont-handshake-deal" title="المشاركة" desc="وضع الإجراءات والأسس التي تتيح للقطاع الخاص المشاركة. وايضا المشاركة في اقتراح الأنظمة والتعليمات التي تسهم في تنفيذ مخططات تطوير وتنمية المنطقة" />
                    </div>
                </div>
            </section>
        )
    }
}
