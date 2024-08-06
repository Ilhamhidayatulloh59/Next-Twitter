'use client'
import { useState } from "react";
import Modal from "../Modal";
import { UserInput } from "@/types/user";
import { Form, Formik } from "formik";
import { registerSchema } from "@/libs/schema";
import { Input } from "../Input";
import { registerUser } from "@/libs/actions/user";
import { toast } from "react-toastify";

const initialValues: UserInput = {
    username: '',
    email: '',
    password: ''
};

export const RegisterModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false)

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const onRegister = async (data: UserInput) => {
        try {
            setLoading(true)
            const res = await registerUser(data)
            if (res.status == "error") throw res.msg
            toast.info(res.msg)
            setLoading(false)
        } catch (err) {
            toast.error(err as string)
            console.log(err);
            setLoading(false)
        }
    }

    return (
        <div>
            <button onClick={openModal} className="bg-blue-500 py-2 px-8 w-[300px] font-bold rounded-full flex justify-center gap-3">
                Buat akun
            </button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={registerSchema}
                    onSubmit={(values, action) => {
                        // console.log(values);
                        onRegister(values)
                        action.resetForm()
                    }}
                >
                    {
                        () => {
                            return (
                                <Form className="h-full overflow-scroll flex flex-col justify-between">
                                    <div className="flex flex-col gap-4">
                                        <h1 className="text-2xl font-bold">Buat Akun</h1>
                                        <Input name="username" type="text" placeholder="Username" />
                                        <Input name="email" type="email" placeholder="Email" />
                                        <Input name="password" type="password" placeholder="Password" />
                                    </div>
                                    <button disabled={loading} type="submit" className="bg-gray-100 btn w-full text-lg font-bold disabled:bg-gray-200 rounded-full flex justify-center gap-3">
                                        { loading ? "Loading .." : "Daftar" }
                                    </button>
                                </Form>
                            )
                        }
                    }
                </Formik>
            </Modal>
        </div>
    )
}