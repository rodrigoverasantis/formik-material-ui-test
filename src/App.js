import React from 'react';
import './App.css';
import { Formik, Field, Form } from "formik";
import { string, object } from "yup";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";

function App() {
	const initials = {
		nombre: "",
		// email: "",
		// telefono: "",
	}

	const validator = object().shape({
		nombre: string().required("Nombre requerido!"),
		// email: string().required("Email requerido!").email(),
		// telefono: string().required("Teléfono requerido!"),
	});

	const handleSubmit = (values, helper) => {
		setTimeout(() => {
			helper.setSubmitting(false);
			alert(JSON.stringify(values, null, 2));
		}, 5000);
	}

	return (
		<Formik initialValues={initials} validationSchema={validator} onSubmit={handleSubmit}>
			{({ submitForm, isSubmitting }) => (
				<Form>
					<Field component={TextField} name="nombre" label="Nombre" variant="outlined" size="small" />
					<Button onClick={submitForm} disabled={isSubmitting}>Enviar!</Button>
					{/* {isSubmitting && (
							<LinearProgress />
						)} */}
				</Form>
			)}
		</Formik>
	);
}

export default App;
