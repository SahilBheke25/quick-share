// import "../shared/styles/normalize.css";
// import "../shared/styles/homeSytle.css";

type Props = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  touched: any;
  errors: any;
};

const CreateEquipmentComponent = ({
  handleChange,
  handleSubmit,
  touched,
  errors,
}: Props) => {

  return (
    <div className="card-section flex w100 justify-center">
      <form className="card flex" onSubmit={handleSubmit}>
        <div className="card-header"> Create Equipment </div>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="name">Equip Name</label>
            <input type="text" id="name" name="name" onChange={handleChange} />
            {errors.name && touched.name ? (
              <div className="error">{errors.name}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              onChange={handleChange}
            />
            {errors.description && touched.description ? (
              <div className="error">{errors.description}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="price">Rent/Day</label>
            <input
              type="text"
              id="price"
              name="price"
              onChange={handleChange}
            />
          </div>
          {errors.price && touched.price ? (
            <div className="error">{errors.price}</div>
          ) : null}

          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              onChange={handleChange}
            />
          </div>
          {errors.quantity && touched.quantity ? (
            <div className="error">{errors.quantity}</div>
          ) : null}

          <button type="submit" className="btn">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEquipmentComponent;
