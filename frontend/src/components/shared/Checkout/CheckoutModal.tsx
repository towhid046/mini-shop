import { FormEvent, useState } from "react";
import useCartInfo from "../../../hooks/useCartInfo";
import { toast } from "react-toastify";
import Button from "../../shared/Button/Button";
import { FaTimes } from "react-icons/fa";
interface CheckoutModalProps {
    setShowModal: (show: boolean) => void;
}
const CheckoutModal = ({setShowModal}:CheckoutModalProps) => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const {  setIsToggle, cartItems, handleRemoveProduct } = useCartInfo();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // axios.post(`${import.meta.env.VITE_SERVER_URL}/orders`, { name, email, address, items: cartItems })
        toast.success("Order placed successfully!");
        cartItems.map((item) => {
          handleRemoveProduct(item.id);
        }
        );
        setShowModal(false);
        setIsToggle(false)
      };


    return (
        <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-60"
            onClick={() => setShowModal(false)}
        >
            <div
                className="bg-base-100 p-6 rounded-2xl shadow-lg w-full max-w-md"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">Checkout</h3>
                    <button onClick={() => setShowModal(false)}>
                        <FaTimes className="text-gray-600 hover:text-red-400" />
                    </button>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-5 p-1 text-gray-700"
                >
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-600">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder="Your full name"
                            className="input w-full rounded-md border border-blue-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-300 transition-shadow shadow-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-600">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="example@email.com"
                            className="input w-full rounded-md border border-blue-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-300 transition-shadow shadow-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-600">Address</label>
                        <textarea
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                            placeholder="Your delivery address"
                            className="textarea textarea-sm w-full rounded-md border border-blue-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-300 transition-shadow shadow-sm"
                        />
                    </div>
                    <div className="pt-2">
                        <Button customClass="!w-full py-2 font-semibold shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                            Submit
                        </Button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default CheckoutModal