import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryThunk, postCategoryThunk, deleteCategoryThunk, updateCategoryThunk } from "../../redux/reducers/dashboardSlice";
import { Field, Form, Formik } from "formik";
import { TiDeleteOutline } from "react-icons/ti";
import { GoPencil } from "react-icons/go";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
    const [editItem, setEditItem] = useState(null); 
    const dispatch = useDispatch();
    const db = useSelector(state => state.categories.categories); 
    const loading = useSelector(state => state.categories.loading); 
    const error = useSelector(state => state.categories.error); 

    useEffect(() => {
        dispatch(getCategoryThunk());
    }, [dispatch]);

    if (loading) return <span>Yüklenir</span>;
    if (error) return <span> xeta bas verdi</span>;

    const handleSubmit = (values, { resetForm }) => {
        if (editItem) {
            const updatedData = { name: values.name, description: values.description };
            dispatch(updateCategoryThunk({ id: editItem.id, updatedData }));
            setEditItem(null); 
        } else {
            dispatch(postCategoryThunk(values));
        }

      
        resetForm();
    };

    const handleEdit = (item) => {
        setEditItem(item);
    };

    const handleDelete = (id) => {
        dispatch(deleteCategoryThunk(id));
    };

    return (
        <div className={styles.dashboard}>
            <Formik
                initialValues={{
                    name: editItem ? editItem.name : "", 
                    description: editItem ? editItem.description : "", 
                }}
             
                onSubmit={handleSubmit}
            >
                {({ resetForm }) => (
                    <Form>
                        <div className={styles.formGroup}>
                            <Field type="text" name="name" placeholder="Name" />
                            <Field type="text" name="description" placeholder="Description" />
                            <button type="submit">{editItem ? "Update" : "Add"}</button>
                        </div>
                    </Form>
                )}
            </Formik>

            <div className={styles.productList}>
                {Array.isArray(db) && db.length > 0 ? (
                    db.map((item) => (
                        <div className={styles.card} key={item.id}>
                            <div className={styles.body}>
                                <TiDeleteOutline onClick={() => handleDelete(item.id)} className={styles.bodyicon} />
                                <GoPencil onClick={() => handleEdit(item)} className={styles.pen} />
                                <span className={styles.title}>{item.name}</span>
                                <span className={styles.description}>{item.description}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
