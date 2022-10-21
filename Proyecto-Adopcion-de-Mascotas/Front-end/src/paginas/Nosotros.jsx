import Header from "../components/Header"
import Footer from "../components/Footer"
import Form from '../components/Form'


const Nosotros = () => {
    return (
        <>

            <Header></Header>

            <h1 className="relative">Nosotros</h1>
            <div className="container mb-5">
                <div className="row row-cols-1 row-cols-md-2 gy-1 mt-4 ">

                    
                       <img height='400' className="" src="/img/nosotrosimg.png" alt="Imagen" />
                    
                    <div className="col"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae architecto molestiae aut distinctio quia. Quos saepe accusamus cupiditate at rerum minus dolorum id, excepturi aliquam quisquam minima nesciunt cumque expedita! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore quis error ex fuga, dolorem doloremque quod nobis et nihil suscipit a aperiam soluta labore quas fugit enim vitae saepe fugiat? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto nostrum numquam, minima atque consectetur tempora quasi consequatur, enim libero ducimus, est asperiores. Provident aut explicabo quos laudantium veritatis similique blanditiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eaque alias rem fugit voluptas dolore aut dicta aliquid dolor veniam nulla, similique est fugiat ipsam natus voluptates necessitatibus laudantium totam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ratione vitae corporis doloribus distinctio necessitatibus tenetur quod laudantium neque modi molestiae deserunt, placeat reprehenderit temporibus! Culpa ullam esse praesentium et.</p></div>




                    <div className="col"><p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae architecto molestiae aut distinctio quia. Quos saepe accusamus cupiditate at rerum minus dolorum id, excepturi aliquam quisquam minima nesciunt cumque expedita! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore quis error ex fuga, dolorem doloremque quod nobis et nihil suscipit a aperiam soluta labore quas fugit enim vitae saepe fugiat? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto nostrum numquam, minima atque consectetur tempora quasi consequatur, enim libero ducimus, est asperiores. Provident aut explicabo quos laudantium veritatis similique blanditiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eaque alias rem fugit voluptas dolore aut dicta aliquid dolor veniam nulla, similique est fugiat ipsam natus voluptates necessitatibus laudantium totam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ratione vitae corporis doloribus distinctio necessitatibus tenetur quod laudantium neque modi molestiae deserunt, placeat reprehenderit temporibus! Culpa ullam esse praesentium et.</p></div>

                    <img height='500' className="" src="/img/nosotrosimg2.png" alt="Imagen" />


                </div>

                <Form></Form>
            </div>

            <Footer></Footer>



        </>
    )
}

export default Nosotros