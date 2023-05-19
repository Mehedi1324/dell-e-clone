import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormField from '../components/FormField';
import Loader from '../components/Loader';
import { getRandomPrompt } from '../utils';
const CreatePost = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });
  console.log(form);

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle submit___________________________________________________

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch(
          'https://dall-e-server-delta.vercel.app/api/post',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...form }),
          }
        );

        await response.json();
        alert('Success');
        navigate('/');
      } catch (err) {
        alert(err);
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please generate an image with proper details');
    }
  };

  // Handle Changes_________________________________________________

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Surprise me by giving some img concepts ............................

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  // generate images___________________

  const generateImg = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch(
          'https://dall-e-server-delta.vercel.app/api/dalle',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              prompt: form.prompt,
            }),
          }
        );

        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (err) {
        alert(err);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert('Please provide proper prompt');
    }
  };

  return (
    <section className="w-[95%] py-3 mx-auto">
      <div>
        {' '}
        <div>
          <h1 className="font-extrabold text-white text-[32px]">Create</h1>
          <p className="mt-2 text-white/90 text-[16px] max-w-[500px]">
            Create imaginative and visually stunning images through DALL-E AI
            and share them with the community
          </p>
        </div>
      </div>
      <form className="max-w-3xl mt-16" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="An armchair in the shape of an avocado"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
          <div className="relative flex items-center justify-center w-64 h-64 p-1 text-sm text-gray-900 border rounded-lg outline-none bg-gray-50 broder-gray-300 focus:ring-blue-500 focus:border-blue-500">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="object-contain w-full h-full rounded-lg"
              />
            ) : (
              <img
                src="/assets/preview.png"
                alt="preview"
                className="object-contain w-9/12 rounded-lg h-9/12 opacity-40"
              />
            )}
            {generatingImg && (
              <div className="absolute inset-0 z-0 flex items-center justify-center  bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>
        <div className="mt-5 ">
          <button
            className="w-full hover:bg-slate-700 shadow-btn text-sm font-medium text-white bg-green-700 rounded-md sm:w-auto px-5 py-2.5 text-center"
            onClick={generateImg}
            type="button"
          >
            {generatingImg ? 'Generating...' : 'Generate'}
          </button>
        </div>
        <div className="mt-10">
          <p className="mt-2 text-white/90 text-[14px]">
            Once you have created the image you want, you can share it with
            others in the community
          </p>
          <button
            type="submit"
            className="mt-3 hover:bg-slate-700 text-white shadow-btn bg-blue-500 font-midum rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {loading ? 'Shareing...' : 'Share with the community'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
