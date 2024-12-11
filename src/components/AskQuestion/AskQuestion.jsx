import { useContext } from "react";
import Ask from "../../assets/ask.gif";
import { ThemeContext } from "../../Provider/AuthProvider";

const AskQuestion = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className="w-11/12 2xl:w-9/12 mx-auto">
      <div className="mt-10 mb-3 flex items-center gap-2">
        <h2 className="text-2xl font-bold mt-3 mb-2">
          Frequently Ask Question
        </h2>
        <img className="w-10" src={Ask} />
      </div>
      <hr className="border-b-2 border-gray-200 my-3" />
      <div className={`${isDarkMode && "text-black"}`}>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-lg font-semibold">
            What is MovieFlix?
          </div>
          <div className="collapse-content">
            <p>
              MovieFlix is a platform where you can explore, stream, and
              discover movies across various genres, languages, and categories.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-lg font-semibold">
            How do I watch movies on MovieFlix?
          </div>
          <div className="collapse-content">
            <p>
              You can watch movies by signing up for an account, selecting your
              favorite movie, and clicking on the "Play" button.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-lg font-semibold">
            Is MovieFlix free to use?
          </div>
          <div className="collapse-content">
            <p>
              We offer both free and premium plans. The free plan gives access
              to limited content, while the premium plan offers unlimited
              streaming of all movies and shows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskQuestion;
