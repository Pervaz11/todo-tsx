import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { editTodo } from "../features/todos/todosSlice";
import { Todo } from "../types/todo.types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const EditTodoPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const todo = useSelector((state: RootState) =>
    state.todos.todos.find((t) => t.id === id)
  );

  if (!todo) return <div className="text-center text-red-500">Todo tapılmadı</div>;

  const initialValues = {
    title: todo.title,
    description: todo.description || "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().min(3, "Minimum 3 simvol").required("Başlıq vacibdir"),
    description: Yup.string(),
  });

  const handleSubmit = (values: typeof initialValues) => {
    const updatedTodo: Todo = {
      ...todo,
      ...values,
    };
    dispatch(editTodo(updatedTodo));
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto mt-6 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Todo Redaktə Et</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4">
          <div>
            <label className="block font-medium">Başlıq</label>
            <Field
              name="title"
              className="w-full p-2 border rounded"
              placeholder="Başlıq daxil edin"
            />
            <ErrorMessage
              name="title"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label className="block font-medium">Açıqlama</label>
            <Field
              name="description"
              className="w-full p-2 border rounded"
              placeholder="İstəyə bağlı açıqlama"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Yadda saxla
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default EditTodoPage;
