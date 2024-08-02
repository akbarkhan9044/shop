import AddProductComponent from "../component/AddProductComponent";

export default function page() {
  return (
    <section className="bg-blue-50">
    <div className="container m-auto max-w-2xl py-24">
      <div
        className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
      >
     <AddProductComponent/>
      </div>
    </div>
  </section>
  )
}
