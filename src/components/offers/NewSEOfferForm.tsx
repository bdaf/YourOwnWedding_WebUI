import { FormEvent, RefObject, useContext, useRef, useState } from "react";
import Card from "../ui/Card";

import styles from "../../css/Form.module.css";
import { useNavigate } from "react-router-dom";
import {
  createAxiosOffer,
  createOffer,
  createOfferWithFormData,
} from "../../services/offerService";
import { SE_OFFERS } from "../../constants";
import AuthenticationContext from "../../store/authentication-context";

function NewSEOfferForm() {
  const navigate = useNavigate();
  const authCtx = useContext(AuthenticationContext);
  const imagesInputRef: RefObject<HTMLInputElement> = useRef(null);
  const titleInputRef: RefObject<HTMLInputElement> = useRef(null);
  const addressInputRef: RefObject<HTMLInputElement> = useRef(null);
  const descriptionInputRef: RefObject<HTMLTextAreaElement> = useRef(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submitHandler(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    setLoading(true);

    const uploadedImages = imagesInputRef.current?.files!;
    const enteredTitle = titleInputRef.current?.value!;
    const enteredAddress = addressInputRef.current?.value!;
    const enteredDescription = descriptionInputRef.current?.value!;

    const formData = new FormData();
    formData.append("offer[title]", enteredTitle);
    formData.append("offer[address]", enteredAddress);
    formData.append("offer[description]", enteredDescription);
    // formData.append("offer[user_id]", authCtx.getCurrentUser().id.toString());

    for (let i = 0; i < uploadedImages.length; i++) {
      formData.append("offer[images][]", uploadedImages[i]);
      console.log(uploadedImages[i]);
    }

    const offer = {
      title: enteredTitle,
      address: enteredAddress,
      description: enteredDescription,
      images: uploadedImages,
    };
    try {
      createAxiosOffer(formData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
      // navigate(`${SE_OFFERS}/${responseOffer.id}`);
    } catch (e) {
      setError("Error occurred during creating offer.");
      console.log("Error occured: ", error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <div className="title">Loading...</div>;
  if (error) return <div className="title">{error}</div>;

  return (
    <div className={styles.container}>
      <Card>
        <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.control}>
            <label htmlFor="title">Title</label>
            <input id="title" type="text" required ref={titleInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="address">Address</label>
            <input id="address" type="text" required ref={addressInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="description">Description</label>
            <textarea
              rows={15}
              id="description"
              required
              ref={descriptionInputRef}
            />
          </div>
          <input type="file" name="image" multiple ref={imagesInputRef}></input>
          <div className={styles.actions}>
            <button className="btn">Create</button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default NewSEOfferForm;
