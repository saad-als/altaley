function ListOfCategories() {

    const list = [
        {
            "id": "1",
            "title": "أفلام ورسوم متحركة"
        },
        {
            "id": "2",
            "title": "السيارات والمركبات"
        },
        {
            "id": "10",
            "title": "موسيقى"
        },
        {
            "id": "15",
            "title": "مزارع وحيوانات"
        },
        {
            "id": "17",
            "title": "ألعاب رياضية"
        },
        {
            "id": "18",
            "title": "أفلام قصيرة"
        },
        {
            "id": "19",
            "title": "السفر والأحداث"
        },
        {
            "id": "20",
            "title": "ألعاب فيديو"
        },
        {
            "id": "21",
            "title": "مدونة الفيديو"
        },
        {
            "id": "22",
            "title": "الأشخاص والمدونات"
        },
        {
            "id": "23",
            "title": "كوميديا"
        },
        {
            "id": "24",
            "title": "ترفيه"
        },
        {
            "id": "25",
            "title": "الأخبار والسياسة"
        },
        {
            "id": "26",
            "title": "الإرشادات والأساليب"
        },
        {
            "id": "27",
            "title": "تعليم"
        },
        {
            "id": "28",
            "title": "علوم وتكنولوجيا"
        },
        {
            "id": "30",
            "title": "أفلام"
        },
        {
            "id": "31",
            "title": "الكرتون/الرسوم المتحركة"
        },
        {
            "id": "32",
            "title": "الإثارة/المغامرات"
        },
        {
            "id": "33",
            "title": "الكلاسيكيات"
        },
        {
            "id": "34",
            "title": "كوميديا"
        },
        {
            "id": "35",
            "title": "وثائقي"
        },
        {
            "id": "36",
            "title": "دراما"
        },
        {
            "id": "37",
            "title": "الأسرة"
        },
        {
            "id": "38",
            "title": "الأجنبية"
        },
        {
            "id": "39",
            "title": "الرعب"
        },
        {
            "id": "40",
            "title": "الخيال العلمي/الفانتازيا"
        },
        {
            "id": "41",
            "title": "فيلم مثير"
        },
        {
            "id": "42",
            "title": "الأفلام القصيرة"
        },
        {
            "id": "43",
            "title": "العروض"
        },
        {
            "id": "44",
            "title": "المقاطع الدعائية للأفلام"
        }
    ];



    const listOfObjects = () => {
        const showList = list.map((item) => {
            return (
                <li key={item.id} className="list-group-item list-group-item-action">
                    <button type="button" className="btn btn-outline-info mt-2">{item.title}</button>
                </li>);
        })

        return showList
    };

    return (
        <>
            <div className=" overflow-auto mt-4 border" style={{ height: '600px', width: '20%' }}>
                <h2 className="m-3">التصنيفات</h2>
                <ul className="">
                    {

                        listOfObjects()
                    }
                </ul>
            </div>




        </>
    );
}


export default ListOfCategories