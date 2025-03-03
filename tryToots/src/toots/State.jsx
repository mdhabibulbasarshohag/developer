import { Title } from "./common/Title";
import Button from './common/Button';


const State = () => {
    return (
        <div className=" flex">
            <div className="w-[300px] bg-amber-100 h-screen sticky top-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit perferendis eius magni porro fuga pariatur, animi ab. Provident fuga beatae a, nam in illum repellat? Voluptates, saepe excepturi? Dolore, maiores.
            </div>
            <div className="w-full bg-amber-600">
                <div className="w-full h-[100px] bg-amber-800 sticky top-0">
                    <Title mainTitle="State" className="" />
                </div>
                <div className=" p-44 bg-amber-300">
                    <Title mainTitle="Subpage" className="text-2xl font-bold" />
                    <Button button="Button" className="w-[200px]" />
                </div>
            </div>
        </div>
    );
};

export default State;