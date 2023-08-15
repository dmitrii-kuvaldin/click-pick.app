import { createContext, useState } from 'react'

const FormContext = createContext()

export function FormProvider({ children }) {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [tasks, setTasks] = useState('');
  const [about, setAbout] = useState('');
  const [pricePerHour, setPricePerHour] = useState(30);
  const [images, setImages] = useState([]);
  const [spec, setSpec] = useState([]);
  const [saver, setSaver] = useState(0);
  const [image, setImage] = useState(null);
  const [loader, setLoader] = useState(false);

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');

  /// для формы регистрации
  const [newimg, setNewimg] = useState([]);
  const [newimg2, setNewimg2] = useState([]);
  const [newimg3, setNewimg3] = useState([]);
  const [newimg4, setNewimg4] = useState([]);
  const [newimg5, setNewimg5] = useState([]);
  const [newimg6, setNewimg6] = useState([]);

  const [educate, setEducate] = useState('edu_online');
  const [exp, setExp] = useState('exp_less1');
  const [int, setInt] = useState('ai_constant');
  const [cript, setCript] = useState('cript_constant');
  const [eng, setEng] = useState('eng_begin');

  const [forward, setForward] = useState(false);
  const [mail, setMail] = useState('');
  const [tg, setTg] = useState('');
  const [inst, setInst] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedOption, setSelectedOption] = useState("Russian Federation");
  const [done, setDone] = useState(false);

  const handleFocus = (event) => event.target.select();

  return (
    <FormContext.Provider
      value={{
        handleFocus,
        done,
        setDone,
        educate,
        setEducate,
        exp,
        setExp,
        int,
        setInt,
        cript,
        setCript,
        eng,
        setEng,
        loader,
        forward,
        setForward,
        setLoader,
        newimg,
        setNewimg,
        saver,
        setSaver,
        login,
        image,
        email,
        pass,
        tasks,
        about,
        images,
        spec,
        phone,
        setPhone,
        setSpec,
        setImage,
        pricePerHour,
        setLogin,
        setEmail,
        setPass,
        setTasks,
        setAbout,
        setImages,
        setPricePerHour,
        name,
        setName,
        lastname,
        setLastname,
        mail,
        setMail,
        tg,
        setTg,
        inst,
        setInst,
        // number,
        // setNumber,
        selectedOption,
        setSelectedOption,
        newimg2,
        setNewimg2,
        newimg3,
        setNewimg3,
        newimg4,
        setNewimg4,
        newimg5,
        setNewimg5,
        newimg6,
        setNewimg6,
        // новые
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export default FormContext
