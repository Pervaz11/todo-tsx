import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { addTodo } from "../features/todos/todosSlice";
import { Todo } from "../types/todo.types";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import "./Home.css"


const AddTodo = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const initialValues = {
    title: "",
    description: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string(),
  });

  const handleSubmit = (values: typeof initialValues) => {
    const newTodo: Todo = {
      id: uuidv4(),
      title: values.title,
      description: values.description,
      isCompleted: false,
      createdAt: new Date().toISOString(),
    };

    dispatch(addTodo(newTodo));
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-md w-full ">
        <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-6">
          Add New Todo
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Title
              </label>
              <Field
                name="title"
                type="text"
                className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Description
              </label>
              <Field
                name="description"
                as="textarea"
                className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                rows={4}
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="sumbit"
              >
                Add Todo
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddTodo;
