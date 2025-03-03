
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ToastifyContainer from "../../../components/Common/ToastifyContainer";
import { toast } from "react-toastify";

const LoginPopUp = ({ onLoginSuccess }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        toast.success("Login successfully!");
        console.log(data);
        onLoginSuccess(data);
    };


    return (
        <div className="fixed left-0 top-0 w-full h-full lg:py-10 py-0 px-2 flex justify-center items-center bg-opacity-50 z-50 bg-black backdrop-blur-md">
            <div className='flex flex-col gap-12 bg-white p-8 rounded-lg shadow-xl xl:w-1/3 lg:w-1/2 md:w-2/3 sm:w-3/4 w-full max-h-full overflow-y-auto'>
                <div className='flex flex-col gap-4 items-center'>
                    <h3 className="2xl:text-4xl xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold text-[#2A6880]">
                        Login
                    </h3>
                    <p className='text-[#122c36]/70 2xl:text-xl xl:text-xl lg:text-xl md:text-lg sm:text-base text-base font-normal'>
                        Sign In to receive news and updates.
                    </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">

                    <div className="flex flex-col gap-4">
                        <label htmlFor="email" className="text-[#122c36]/70 text-lg font-normal">
                            Email Address*
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email address"
                            className="text-[#7e8b99] text-base font-normal px-6 py-4 bg-[#fafbfc] rounded-2xl border border-[#709aaa] outline-[#2A6880]"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Invalid email address',
                                },
                            })}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    {/* Password */}
                    <div className="flex flex-col gap-4">
                        <label htmlFor="password" className="text-[#122c36]/70 text-lg font-normal">
                            Password*
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="text-[#7e8b99] text-base font-normal px-6 py-4 bg-[#fafbfc] rounded-2xl border border-[#709aaa] outline-[#2A6880]"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: { value: 8, message: 'Password must be at least 8 characters long' },
                            })}
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>



                    <div className="flex flex-col gap-3">
                        <button
                            type="submit"
                            className="text-white text-lg font-semibold px-6 py-4 bg-[#2A6880] rounded-2xl"
                        >
                            Sign In
                        </button>
                        <div className="flex justify-end">
                            {/* <Link to="/email-verify" className="text-[#2A6880] font-semibold text-sm">
                                
                                Email Verify
                            </Link> */}
                            <Link to="/forgot-password" className="text-[#2A6880] font-semibold text-sm">
                                Forgot Password?
                            </Link>
                        </div>
                    </div>
                </form>

                <div className='flex justify-center'>
                    <p className="text-[#122c36]/70 2xl:text-xl xl:text-xl lg:text-xl md:text-lg sm:text-base text-base font-normal">
                        Don’t have an account? <Link className='text-[#2A6880] font-bold' to="/sing-up">Sign Up</Link>
                    </p>
                </div>
            </div >
            <ToastifyContainer />
        </div >
    );
};




export default LoginPopUp;
