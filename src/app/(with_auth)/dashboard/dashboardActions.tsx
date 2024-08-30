import { TodayBirthdays } from './todayBirthdays';

export async function fetchTodayBirthdays(): Promise<Array<TodayBirthdays>> {
    try {

        const url = "https://queenbee-mgmt-system-back-mmkoocyzw-vinicios-bilucas-projects.vercel.app/birthdays"
        const data = await fetch(url).then((res) =>
            res.json()
        )

        return data;
    } catch (error) {
        console.error('Error on Today Birthdays:', error);
        throw new Error('Failed to Fetch the Today Birthdays.');
    }
}



