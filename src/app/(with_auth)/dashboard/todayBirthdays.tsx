import Image from 'next/image';
import { fetchTodayBirthdays } from './dashboardActions';
import { LiaBirthdayCakeSolid } from "react-icons/lia";


export type TodayBirthdays = {
    id: string;
    name: string;
    age: number;
    gender: string;
    profile_photo: string;
};

const default_profile_photo = "/profile.png"

export default async function TodayBirthdays() {

    const todayBirthdays = await fetchTodayBirthdays();


    return (
        <div className="flex w-full flex-col md:col-span-4">
            <h2 className={`mb-4 text-xl md:text-2xl`}>
                Aniversariantes
            </h2>
            <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
                {/* NOTE: Uncomment this code in Chapter 7 */}

                <div className="bg-white px-6">
                    {todayBirthdays.map((todayBirthday, i) => {
                        return (
                            <div
                                key={todayBirthday.id}
                                className="CLASS_NAME_HERE"
                            >
                                <div className="flex items-center">

                                    {todayBirthday.profile_photo
                                        ? (<Image
                                            src={todayBirthday.profile_photo}
                                            alt={`${todayBirthday.name}'s profile picture`}
                                            className="mr-4 rounded-full"
                                            width={32}
                                            height={32}
                                        />)
                                        : (
                                            <Image
                                                src={default_profile_photo}
                                                alt={`${todayBirthday.name}'s profile picture`}
                                                className="mr-4 rounded-full"
                                                width={32}
                                                height={32}
                                            />
                                        )}


                                    <div className="min-w-0">
                                        <p className="truncate text-sm font-semibold md:text-base">
                                            {todayBirthday.name}
                                        </p>
                                        <p className="hidden text-sm text-gray-500 sm:block">
                                            {todayBirthday.age} Anos
                                        </p>
                                    </div>
                                </div>
                                <p
                                    className={`truncate text-sm font-medium md:text-base`}
                                >
                                    <LiaBirthdayCakeSolid />
                                </p>
                            </div>
                        );
                    })}
                </div>
                <div className="flex items-center pb-2 pt-6">
                    <h3 className="ml-2 text-sm text-gray-500 ">Happy Birthday!</h3>
                </div>
            </div>
        </div>
    );
}
