"use client"
import React, { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
    DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { generateForm } from '../actions/generateForm';
import { useFormState, useFormStatus } from 'react-dom';

const initialState: {
    message: string;
    data?: any;
} = {
    message: "",
}

export function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending}>
            {pending ? "Generating..." : "Generate"}
        </Button>
    )
}

export default function FormGenerator() {
    const [state, formAction] = useFormState(generateForm, initialState)
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (state.message === "success") {
            setOpen(false);
        }
        console.log(state.data)
    }, [state.message])

    const onFormCreate = () => {
        setOpen(true);
    }
  return (
   <Dialog open={open} onOpenChange={setOpen}>
  <Button onClick={onFormCreate}>Create Form</Button>
  <DialogContent className='sm:max-w-[425px]'>
    <DialogHeader>
      <DialogTitle>Create New Form</DialogTitle>
              
              </DialogHeader>
                  <form action={formAction}>
                      <div className='gird gap-4 py-4'>
                          <Textarea id="description" name="description" required placeholder='GIve a Good Description 
                          for your form, to see the magic🪄'></Textarea>
                      </div>
              <DialogFooter>
                  <SubmitButton/>
                  <Button variant="link">Create Manually</Button>
              </DialogFooter>
                 </form>

  </DialogContent>
</Dialog>

  )
}
