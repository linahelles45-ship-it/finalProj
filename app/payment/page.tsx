
"use client"
import React, { useContext } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { shippingAddressType } from '@/Types/order.type'
import { createCashOrder, createVisaOrder } from '@/app/_actions/order.action'
import { cartContext } from '@/app/_context/CartContextProvider'

interface PaymentFormType {
    details: string,
    phone: string,
    city: string,
    postalCode: string,
    type: string,
}

export default function PaymentPage() {
    const form = useForm<PaymentFormType>({
        defaultValues: {
            details: "", phone: "", city: "", postalCode: "", type: "cash",
        },
    })

    const { cartId, setcartProducts, setnumberOfCartItems, settotalPriseOfCart } = useContext(cartContext)

    function clearCart() {
        setcartProducts([])
        setnumberOfCartItems(0)
        settotalPriseOfCart(0)
    }

    async function handlePayment(value: PaymentFormType) {  // ✅ أضف type
        const userData: shippingAddressType = {
            shippingAddress: {
                city: value.city,
                details: value.details,
                phone: value.phone,
                postalCode: value.postalCode,
            }
        }

        if (value.type == "cash") {
            const res = await createCashOrder(cartId, userData)
            if (res.status == "success") clearCart()
        } else if (value.type == "visa") {
            const res = await createVisaOrder(cartId, userData)
            if (res.session?.url) {
                clearCart()
                window.open(res.session.url)
            }
        }
    } 

    return (  
    <>
    <h1 className='text-center text-5xl my-10'>Payment</h1>
    <div className='container max-w-5xl mx-auto'>
      <form onSubmit={form.handleSubmit(handlePayment)}>
      <Controller name="details" control={form.control} render={({ field, fieldState }) => (
      <Field>
      <FieldLabel htmlFor={field.name}>Details</FieldLabel>
      <Input {...field} id={field.name} placeholder='Enter Your details' autoComplete='off' />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
    )} />
    <Controller name="phone" control={form.control} render={({ field, fieldState }) => (
    <Field>
    <FieldLabel htmlFor={field.name}>Phone</FieldLabel>
    <Input {...field} id={field.name} placeholder='Enter Your Phone' autoComplete='off' />
    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
    )} />
    <Controller name="city" control={form.control} render={({ field, fieldState }) => (
    <Field>
    <FieldLabel htmlFor={field.name}>City</FieldLabel>
    <Input {...field} id={field.name} placeholder='Enter Your city' autoComplete='off' />
    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
    )} />
    <Controller name="postalCode" control={form.control} render={({ field, fieldState }) => (
    <Field>
    <FieldLabel htmlFor={field.name}>Postal Code</FieldLabel>
    <Input {...field} id={field.name} placeholder='Enter Your postalcode' autoComplete='off' />
    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
    )} />
    <Controller name="type" control={form.control} render={({ field, fieldState }) => (
    <Field>
    <FieldLabel>Payment Method</FieldLabel>
    <RadioGroup value={field.value} onValueChange={field.onChange} className="flex gap-6 mt-2">
    <div className="flex items-center gap-2">
    <RadioGroupItem value="cash" id="cash" />
    <Label htmlFor="cash">Cash</Label>
    </div>
    <div className="flex items-center gap-2">
    <RadioGroupItem value="visa" id="visa" />
    <Label htmlFor="visa">Visa</Label>
    </div>
    </RadioGroup>
    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
    )} />
    <div className='flex flex-col gap-4 my-5'>
    <button type='submit' className='text-lg w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg'>
    Pay NOW
    </button>
      </div>
      </form>
  </div>
    </>
    )
}