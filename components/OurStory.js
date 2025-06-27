import Image from 'next/image';

const OurStory = () => {
  return (
    <div className="relative h-96 w-full">
      <Image
        src="/images/AboutPage/our-story.jpg"
        alt="Our Story Background"
        fill
        style={{ objectFit: 'cover' }}
        className="z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <h1 className="text-5xl font-bold">Our Story</h1>
      </div>
    </div>
  );
};

export default OurStory;