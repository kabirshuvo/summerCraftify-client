const AboutUs = () => {
  const backgroundImageUrl = "url('https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')";

  return (
    <div
      className="w-7/12 my-40 mx-auto bg-cover bg-center bg-no-repeat text-white py-10 px-5"
      style={{ backgroundImage: backgroundImageUrl }}
    >

     <div className="flex flex-col justify-center items-center bg-teal-950 bg-opacity-60 p-16">
     <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="mb-4">
        SummerCraftify is a leading art and crafts school that has been providing high-quality creative education since 2007. What started as a small group of university students with a passion for art and crafts has now grown into a thriving institution dedicated to nurturing creativity in individuals of all ages.
      </p>
      <p className="mb-4">
        It all began when two friends, Sarah and David, took the initiative to establish SummerCraftify. Inspired by their shared love for artistic expression, they envisioned a place where people could explore their creativity and learn various art techniques.
      </p>
      <p className="mb-4">
        Their vision was further supported by their favorite university professor, Professor Johnson, who played a pivotal role in helping them develop a comprehensive 20-year roadmap for the school. With his guidance and expertise, SummerCraftify was able to set a solid foundation and chart a course for success.
      </p>
      <p className="mb-4">
        Over the years, SummerCraftify has evolved into a reputable institution, offering a wide range of art and crafts classes for students of all skill levels. Our dedicated team of experienced instructors is committed to providing a nurturing and inspiring learning environment.
      </p>
      <p className="mb-4">
        At SummerCraftify, we believe that creativity knows no bounds. We strive to unlock the artistic potential in every individual, encouraging them to explore their unique talents and express themselves through various art mediums. Whether you are a beginner or an experienced artist, we have a class that will suit your interests and help you grow.
      </p>
      <p>
        We are proud of our journey so far and grateful to our students and community for their continuous support. As we look to the future, we remain committed to fostering creativity, nurturing talent, and making a positive impact through art and crafts education.
      </p>
     </div>
    </div>
  );
};

export default AboutUs;
