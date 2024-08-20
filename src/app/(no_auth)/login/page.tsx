import "./style.scss"
import BeeMLogo from "@/components/BeeMLogo/BeeMLogo";
import { IoEnter } from "react-icons/io5";

import { Button } from "@/components/Button/Button";

export default function LoginPage() {
    return (
        <main className="LoginContainer">
            <div className="LoginContent">
                <div className="LoginHeader">
                    <BeeMLogo />
                </div>
                <form action={'/dashboard'}>
                    <div className="FormContent">
                        <div className="w-full">
                            <div>
                                <label
                                    htmlFor="email"
                                >
                                    User
                                </label>
                                <div className="relative">
                                    <input
                                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email address"
                                        required
                                    >

                                    </input>
                                </div>
                            </div>
                            <div className="mt-4">
                                <label
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="Enter password"
                                        required
                                        minLength={6}
                                    />
                                </div>
                            </div>
                        </div>
                        <Button>
                            Log in 
                        </Button>
                    </div>
                </form>
            </div>
        </main>



    );
}