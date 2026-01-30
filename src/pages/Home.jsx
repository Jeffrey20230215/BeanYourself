import { Link } from 'react-router-dom';

export default function Home(){
    const articles = [
        {
        id: 1,
        category: "保存密技",
        date: "2025/09/10",
        image: "/photos/section5/保存密技.jpg",
        title: "咖啡豆要放冰箱嗎？教你 30 天都像剛烘好的保存密技",
        desc: "豆子買回來喝不完怎麼辦？千萬別直接丟進冰箱！只要掌握「垂直保鮮」與「避光乾燥」兩個關鍵...",
        link: "/article/1",
        customClass: "" 
        },
        {
        id: 2,
        category: "新手教學",
        date: "2025/11/23",
        image: "/photos/section5/新手教學.jpg",
        title: "手沖其實很簡單！只要 3 招，在家泡出咖啡館等級",
        desc: "不是貴桑桑的豆子才泡得出好咖啡。我們將把繁雜的技巧簡化成「溫潤、注水、收尾」三個直覺動作...",
        link: "/article/2",
        customClass: "border-md-start-0"
        },
        {
        id: 3,
        category: "選購指南",
        date: "2025/09/10",
        image: "/photos/section5/選購指南.jpg",
        title: "日曬、水洗看不懂？只要記住這 2 點，不再買到不喜歡的味道",
        desc: "包裝上的「處理法」不是化學術語，而是風味的魔術師。簡單來說，日曬帶果香，水洗帶酸感...",
        link: "/article/3",
        customClass: "border-md-start-0" 
        }
    ];
    
    return (<div className="container my-md-16 my-9">
        
        <div className="d-lg-flex  justify-content-between mb-md-8 mb-7">
            <h1 className="display-3 fw-bolder text-primary-13">與咖啡的<span className="text-primary-10">對話</span></h1>
            <p className="fs-5 pt-5 fw-bold text-primary-10">揭開風味秘密，讓每一次沖煮都成為專屬你的療癒時刻。</p>
        </div>

        <div className="row g-md-0 g-4 mb-8 " style={{ minHeight: "739px", height: "auto" }}>
            {articles.map((item)=>(
                <div key={item.id} className="col-12 col-md-4 d-flex ">
                    <div className={`position-relative border border-primary-13 rounded-0 bg-primary px-4 px-md-6 pt-4 pt-md-6 pb-4 ${item.customClass}`} style={{width: '100%'}}>
                        <div className="d-flex justify-content-between ls-2 mb-4">
                            <h6 className="card-subtitle mt-2 text-muted text-primary-08">{item.category}</h6>
                            <h6 className="card-subtitle mt-2 text-muted text-primary-13 fw-bolder">{item.date}</h6>
                        </div>
                        <div className="mb-4">
                            <img 
                            src={item.image}
                            className="img-fluid border border-primary-13 img-grayscale-md" 
                            style={{ display: 'block'}} 
                            />
                        </div>
                        <div className="mb-6">
                            <h5 className="ls-2 card-title fw-bolder text-primary-13 mb-2">{item.title}</h5>
                            <p className="small card-text text-primary-11">{item.desc}</p>
                        </div>                    
                        <div >
                            <Link to="" className="stretched-link text-primary-13 text-decoration-none fw-bold">Read More</Link>                        
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className="text-end mb-5">
            <Link to="" className="ls-2 text-black fw-bolder link-offset-3 border-black border-bottom border-2">View all articles</Link>
        </div>


    </div>)
}