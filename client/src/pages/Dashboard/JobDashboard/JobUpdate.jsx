// import React, { useEffect } from "react";
// import "../../PostJob/postjob.css";
// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
// // import BodyLoader from "./BodyLoader";

// const JobUpdate = () => {
//   const [titulli, setTitulli] = useState("");
//   const [emriKompanise, setEmriKompanise] = useState("");
//   const [kategoria, setKategoria] = useState("");
//   const [lloji, setLloji] = useState("");
//   const [dataSkadimit, setDataSkadimit] = useState("");
//   const [rroga, setRroga] = useState("");
//   const [email, setEmail] = useState("");
//   const [shteti, setShteti] = useState("");
//   const [telefoni, setTelefoni] = useState("");
//   const [pershkrimi, setPershkrimi] = useState("");
//   const [logoKompanise, setLogoKompanise] = useState(null);

//   const [loading, setLoading] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   const navigate = useNavigate();

//   const setimgfile = (e) => {
//     setLogoKompanise(e.target.files[0]);
//   };

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);

//     return () => clearTimeout(timeout);
//   }, []);

//   const addShpallje = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     var formData = new FormData();
//     formData.append("photo", logoKompanise);

//     formData.append("titulli", titulli);
//     formData.append("emriKompanise", emriKompanise);
//     formData.append("kategoria", kategoria);
//     formData.append("lloji", lloji);
//     formData.append("dataSkadimit", dataSkadimit);
//     formData.append("rroga", rroga);
//     formData.append("email", email);
//     formData.append("shteti", shteti);
//     formData.append("telefoni", telefoni);
//     formData.append("pershkrimi", pershkrimi);

//     const config = {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     };

//     const res = await axios.put(
//       "http://localhost:8800/jobUpdate",
//       formData,
//       config
//     );
//     console.log(res);
//     setTimeout(() => {
//       setLoading(false);
//       navigate("/JobDashboard");
//     }, 2000);
//   };

//   if (isLoading) {
//     return (
//       <div className="pre-loader">
//         <div className="spinner"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="PostJob">
//       {loading ? (
//         <div className="body-loader">
//           <div className="spinner" />
//         </div>
//       ) : (
//         <div className="container-post-job">
//           <h4 className="post-job-title">Rifresko ose Update Shpalljen tuaj</h4>
//           <br />
//           <p className="post-job-kushti">
//             Plotëso informatat e shpalljes (Shpallja juaj do të postohet brenda
//             24 orëve!)
//           </p>
//           <form
//             action=""
//             className="form-post-job"
//             encType="multipart/form-data"
//             onSubmit={addShpallje}
//           >
//             <div className="post-job-informatat">
//               <div className="post-job-informata-shpallje">
//                 <h4 className="post-job-informata-shpallje-header">
//                   Informatat për shpalljen
//                 </h4>
//                 <br />

//                 <div className="container-post-job-form-label">
//                   <label htmlFor="inputTitle" className="post-job-form-label">
//                     Titulli
//                   </label>
//                   <input
//                     id="inputTitle"
//                     type="text"
//                     className="post-job-form-input"
//                     onChange={(e) => setTitulli(e.target.value)}
//                     name="titulli"
//                     required
//                   />

//                   <p className="error-message hide">
//                     <FontAwesomeIcon icon={faExclamationCircle} />
//                     Ju lutem shkruani titullin e punes.
//                   </p>
//                 </div>

//                 <div className="container-post-job-form-label">
//                   <label
//                     htmlFor="inputCompanyName"
//                     className="post-job-form-label"
//                   >
//                     Emri Kompanisë
//                   </label>
//                   <input
//                     id="inputCompanyName"
//                     type="text"
//                     className="post-job-form-input"
//                     onChange={(e) => setEmriKompanise(e.target.value)}
//                     name="emriKompanise"
//                     required
//                   />
//                   <p className="error-message hide ">
//                     <FontAwesomeIcon icon={faExclamationCircle} />
//                     Ju lutem shkruani emrin e kompanisë.
//                   </p>
//                 </div>

//                 <div className="container-post-job-form-label">
//                   <label
//                     htmlFor="inputCategory"
//                     className="post-job-form-label"
//                   >
//                     Kategoria
//                   </label>

//                   <select
//                     id="inputCategory"
//                     className="post-job-form-input"
//                     onChange={(e) => setKategoria(e.target.value)}
//                     name="kategoria"
//                     required
//                   >
//                     <option value=""></option>
//                     <option value="IT">IT</option>
//                     <option value="agronomi">Agronomi</option>
//                     <option value="Arsim dhe Edukim">Arsim dhe Edukim</option>
//                     <option value="Arkitekture dhe Dizajn">
//                       Arkitekture dhe Dizajn
//                     </option>
//                     <option value="Banka dhe Financa">Banka dhe Financa</option>
//                     <option value="Call Center">Call Center</option>
//                     <option value="Juridike">Juridike</option>
//                     <option value="Consulting">Consulting</option>
//                     <option value="Tjera">Tjera</option>
//                   </select>
//                   <p className="error-message hide ">
//                     <FontAwesomeIcon icon={faExclamationCircle} />
//                     Ju lutem shtypeni kategorine.
//                   </p>
//                 </div>

//                 <div className="container-post-job-form-label">
//                   <label htmlFor="inputType" className="post-job-form-label">
//                     Lloji
//                   </label>

//                   <select
//                     id="inputLloji"
//                     className="post-job-form-input"
//                     onChange={(e) => setLloji(e.target.value)}
//                     name="lloji"
//                     required
//                   >
//                     <option value=""></option>
//                     <option value="Gjysme orari">Gjysme orari</option>
//                     <option value="Kontrate me kohe te caktuar">
//                       Kontrate me kohe te caktuar
//                     </option>
//                     <option value="Orar i plote">Orar i plote</option>
//                     <option value="Praktik">Praktik</option>
//                     <option value="Tjeter">Tjeter</option>
//                   </select>
//                   <p className="error-message hide ">
//                     <FontAwesomeIcon icon={faExclamationCircle} />
//                     Ju lutem shtypeni llojin e punës.
//                   </p>
//                 </div>

//                 <div className="container-post-job-form-label">
//                   <label htmlFor="inputDate" className="post-job-form-label">
//                     Data e skadimit
//                   </label>

//                   <input
//                     id="inputDate"
//                     type="date"
//                     className="post-job-form-input"
//                     onChange={(e) => {
//                       const selectedDate = new Date(e.target.value);
//                       const formattedDate = selectedDate
//                         .toISOString()
//                         .substring(0, 10);
//                       setDataSkadimit(formattedDate);
//                     }}
//                     name="dataSkadimit"
//                     required
//                   />
//                   <p className="error-message hide ">
//                     <FontAwesomeIcon icon={faExclamationCircle} />
//                     Ju lutem shtypeni daten e skadimit.
//                   </p>
//                 </div>

//                 <div className="container-post-job-form-label">
//                   <label htmlFor="inputSalary" className="post-job-form-label">
//                     Rroga(Opsionale)
//                   </label>

//                   <input
//                     id="inputSalary"
//                     type="text"
//                     className="post-job-form-input"
//                     onChange={(e) => setRroga(e.target.value)}
//                     name="rroga"
//                   />
//                 </div>
//               </div>

//               <div className="post-job-informata-kontakti">
//                 <h4 className="post-job-informata-shpallje-header">
//                   Informatat e kontaktit
//                 </h4>

//                 <div className="container-post-job-form-label">
//                   <label htmlFor="inputEmail" className="post-job-form-label">
//                     Email
//                   </label>

//                   <input
//                     id="inputEmail"
//                     type="text"
//                     className="post-job-form-input"
//                     onChange={(e) => setEmail(e.target.value)}
//                     name="email"
//                   />
//                 </div>

//                 <div className="container-post-job-form-label">
//                   <label htmlFor="inputShteti" className="post-job-form-label">
//                     Shteti
//                   </label>

//                   <select
//                     id="inputShteti"
//                     className="post-job-form-input"
//                     onChange={(e) => setShteti(e.target.value)}
//                     name="shteti"
//                     required
//                   >
//                     <option value=""></option>
//                     <option value="Kosove">Kosove</option>
//                     <option value="Shqiperi">Shqiperi</option>
//                     <option value="Maqedoni">Maqedoni</option>
//                   </select>
//                 </div>

//                 <div className="container-post-job-form-label">
//                   <label
//                     htmlFor="inputTelefoni"
//                     className="post-job-form-label"
//                   >
//                     Telefoni
//                   </label>

//                   <input
//                     id="inputTelefoni"
//                     type="text"
//                     className="post-job-form-input"
//                     onChange={(e) => setTelefoni(e.target.value)}
//                     name="telefoni"
//                   />
//                 </div>
//                 <div className="container-post-job-form-label">
//                   <label
//                     htmlFor="inputPershkrimi"
//                     className="post-job-form-label"
//                   >
//                     Pershkrimi
//                   </label>

//                   <textarea
//                     id="inputPershkrimi"
//                     className="post-job-form-input"
//                     onChange={(e) => setPershkrimi(e.target.value)}
//                     name="pershkrimi"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="post-job-logo">
//               <label htmlFor="jobsLogoFile" id="inputFile">
//                 Ngarko një logo të kompanisë suaj.
//               </label>
//               <input
//                 type="file"
//                 name=""
//                 id="jobsLogoFile"
//                 className="file-input"
//                 onChange={setimgfile}
//               />
//             </div>
//             <input
//               type="submit"
//               className="button-submit"
//               value="Posto shpalljen"
//               onClick={addShpallje}
//             />
//             <br />
//             <br />
//             <br />
//             <br />
//             <br />
//             <br />
//             <br />
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default JobUpdate;









// //JobUpdate