import Image from 'next/image';

const ProfileImage = () => {
  return (
    <div className="relative h-24 w-24 rounded-full overflow-hidden mb-4">
      <Image
        src="/profile.jpg"
        alt="Mohammad Reza Taghimomeni"
        layout="fill"
        objectFit="cover"
        className="rounded-full"
      />
    </div>
  );
};

export default ProfileImage;
