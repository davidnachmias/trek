import { ABOUT_TEXT } from "../constants/constants";
export default function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center  text-4xl">about me</h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center justify-center">
            <p className="my-6 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
