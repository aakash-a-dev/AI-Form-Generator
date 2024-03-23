"use client"
import React, { useState } from 'react'
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


export default function FormGenerator() {
    const [open, setOpen] = useState(false);

    const onFormCreate = () => {
        setOpen(true);
    }
  return (
   <Dialog open={open} onOpenChange={setOpen}>
  <Button onClick={onFormCreate}>Create Form</Button>
  <DialogContent className='sm:max-w-[425px]'>
    <DialogHeader>
      <DialogTitle>Create New Form</DialogTitle>
                  <form>
                      <div className='gird gap-4 py-4'>
                          <Textarea id="description" name="description" required placeholder='GIve a Good Description 
                          for your form, to see the magic🪄'></Textarea>
                      </div>
                 </form>
              </DialogHeader>
              <DialogFooter>
                  <Button variant="link">Create Manually</Button>
              </DialogFooter>
  </DialogContent>
</Dialog>

  )
}
