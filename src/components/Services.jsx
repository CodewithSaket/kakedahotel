const Services = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-yellow-300 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="relative rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-80 bg-cover bg-center flex flex-col justify-end p-6"
            style={{
              backgroundImage:
                "url('https://media.istockphoto.com/id/1042424568/photo/3d-rendering-luxury-modern-bedroom-suite-tv-with-wardrobe-and-walk-in-closet.jpg?s=612x612&w=0&k=20&c=AGoD3syG6mjPqWcqFVrcpzgFK_nt5SgwlVcsmyPoLbk=')",
            }}
          >
            <h3 className="text-2xl font-semibold text-white drop-shadow-lg">Luxury Rooms</h3>
            <p className="text-white drop-shadow-md">
              Experience the ultimate comfort in our luxury rooms.
            </p>
          </div>
          <div
            className="relative rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-80 bg-cover bg-center flex flex-col justify-end p-6"
            style={{
              backgroundImage: "url('https://fusionresorts.com/danang/wp-content/uploads/2025/05/IMG_4836-Enhanced-NR_1-1024x683.jpg')",
            }}
          >
            <h3 className="text-2xl font-semibold text-white drop-shadow-lg">Spa & Wellness</h3>
            <p className="text-white drop-shadow-md">
              Indulge in rejuvenating spa treatments and wellness programs.
            </p>
          </div>
          <div
            className="relative rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-80 bg-cover bg-center flex flex-col justify-end p-6"
            style={{
              backgroundImage: "url('https://cdn.sanity.io/images/ocl5w36p/prod5/c0401c93116df10e12fea3bf9ea9662394fc9b80-906x972.jpg?w=480&auto=format&dpr=2')",
            }}
          >
            <h3 className="text-2xl font-semibold text-white drop-shadow-lg">Fine Dining</h3>
            <p className="text-white drop-shadow-md">
              Savor exquisite cuisine prepared by our master chefs.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Services;
