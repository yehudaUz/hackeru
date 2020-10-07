import React, { useEffect, useState, useReducer } from 'react'
import CourseIconAndText from './CourseIconAndText'
const Benefits = () => {
    return (
        <div className="Benfits bg-white text-dark text-right">
            <div className="cardsContainer container">
                <div class="row">
                    <div class="col-12 col-lg-5 p-0">
                        <div class="card firstCard">
                            <div class="card-body row">
                                <div className="cardImg col-3">
                                    <img src="/global.svg" alt="" />
                                </div>
                                <div className="cardTextContainer col">
                                    <h5 class="card-title">HackerU העולמית</h5>
                                    <p class="card-text">ל- HackerU פריסה עולמית הכוללת שיתופי פעולה עם אוניברסיטאות מובילות בארה"ב, הודו ואירופה. במסגרת שיתוף הפעולה HackerU מציעה מסלולי לימוד שונים כדוגמת: סייבר ואבטחת מידע, שיווק דיגיטלי, UI\UX ועוד.</p>
                                    <a href="#" class="card-text">קרא עוד ←</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-5 p-0">
                        <div class="card secondCard">
                            <div class="card-body row">
                                <div className="cardImg col-3">
                                    <img src="/buildings.svg" alt="" />
                                </div>
                                <div className="cardTextContainer col">
                                    <h5 class="card-title">HackerU לעסקים</h5>
                                    <p class="card-text">HackerU-Pro החטיבה העסקית של HackerU מתמחה בהכשרה מקצועית בתחומי ההייטק והעיצוב השונים. מתן ייעוץ מקצועי לעסקים וגופים ממשלתיים בנושאים טכנולוגיים מגוונים.</p>
                                    <a href="#" class="card-text">קרא עוד ←</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <h1 className="display-5 blackish container">היתרונות ללומדים בהאקריו</h1>
            <div className="benfeitsGrid container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <CourseIconAndText imgSrc="/arrow.svg" header="שיטת מיון ייחודית"
                            text="שיטת מיון ייחודית לזיהוי והתאמת כישוריך בתחומי ההייטק הכוללת התנסות מעשית ללא סיכון כספי"
                            link="שיטת המיון" url="" />
                    </div>
                    <div className="col-12 col-md-6">
                        <CourseIconAndText imgSrc="/program.svg" header="ללמוד מהבית מקצוע Online"
                            text="קורסים אונליין הישר בשידור LIVE למחשב שלכם בבית. אותם מסלולי הלימוד והתכנים עם הטכנולוגיה האיכותית והטובה ביותר." />
                    </div>
                    <div className="col-12 col-md-6">
                        <CourseIconAndText imgSrc="/doctors.svg" header="סגל מרצים מנצח"
                            text="סגל הוראה המתמחה במקצועות ההייטק המבוקשים בניהם מנהלים בכירים בחברות הייטק, יזמים ועצמאיים בעלי חברות וניסיון מעשי רב שנים. אחרת איך תלמדו את הפרקטיקה הנדרשת בשוק העבודה?"
                            link="מיהם המרצים?" url="" />
                    </div>
                    <div className="col-12 col-md-6">
                        <CourseIconAndText imgSrc="/milga.svg" header="מלגת לימודים והתחייבות חוזית לעבודה"
                            text='מאות מעסיקים, מנכל"ים, סמנכל"ים ומנהלות משאבי אנוש מהחברות הגדולות בשוק שעובדים איתנו כדי למצוא לכם עבודה בסיום הלימודים! סטודנט שעבר בהצלחה את שלב המיון יקבל התחייבות חוזית לעבודה ומלגת לימודים עד ₪7,000 גובה המלגה תלוי במסלול ההכשרה שבחרת'
                            link="מי מעסיק את הבוגרים שלנו?" url="" />
                    </div>
                    <div className="col-12 col-md-6">
                        <CourseIconAndText imgSrc="/program.svg" header="תוכנית לימודים מקיפה"
                            text="הקורסים המקיפים והפרקטיים ביותר מבחינת כמות שעות ותכנים המותאמים לשוק העבודה"
                            link="מה לומדים?" url="" />
                    </div>
                    <div className="col-12 col-md-6">
                        <CourseIconAndText imgSrc="/location.svg" header="מיקום מרכזי"
                            text="קל להגיע וקל לחזור, ארבעה סניפים בערים מרכזיות רמת גן, ירושלים, באר שבע וחיפה, רק 5 דקות מתחנת הרכבת"
                            link="איפה אנחנו יושבים?" url="" />
                    </div>
                    <div className="col-12 col-md-6">
                        <CourseIconAndText imgSrc="/prisa.svg" header="פריסה עולמית"
                            text='שיתופי פעולה עם אוניברסיטאות מובילות ברחבי ארה"ב, הודו ואירופה' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits