import Footer from "../components/Footer"
import Header from "../components/Header"
import PetList from "../components/PetList"
import useFetch from "../hooks/useFetch"
import Carousel from "../components/Carousel"


const Mascotas = () => {

  const { fetchAnimals } = useFetch();



  return (
    <>
      <Header></Header>
      <h1 className="relative">Mascotas</h1>
      <div className="container ">
      <div className="row row-cols-1 row-cols-md-3 gy-1 mb-2 mt-2">
        {fetchAnimals.map(animal => (
          <PetList key={animal.id} animal={animal}></PetList>

        ))}

      </div>

      <h1 className="m-0">Información</h1>
      <Carousel></Carousel>
      <p className="mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum vel error explicabo commodi laboriosam ipsam itaque, totam eligendi corporis asperiores libero rerum quibusdam doloribus perspiciatis quod culpa alias iste consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam assumenda laboriosam ipsam exercitationem voluptate, id adipisci soluta, similique eius iure voluptates iste tempore placeat quaerat! Dolorum esse praesentium dolore omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nobis quo ipsam magni rerum architecto vel? Neque eligendi dicta, corrupti itaque totam minima, veniam soluta laborum, quia sequi qui architecto. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque deleniti accusantium quidem debitis quae odit laboriosam reiciendis commodi est. Quasi numquam facilis sunt officiis nostrum totam placeat exercitationem reiciendis pariatur? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit ipsam velit minima omnis voluptates maiores accusantium quis, commodi facilis quidem id quibusdam quasi enim dolore ex dolorum dolor dignissimos iste.</p>
      </div>

      <Footer></Footer>


    </>
  )
}

export default Mascotas