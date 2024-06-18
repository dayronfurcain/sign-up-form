import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'

import iconError from './assets/icon-error.svg'
import { cn } from './lib/utils'

const formSchema = z.object({
  firstname: z.string({}).min(1, { message: 'First Name cannot be empty' }),
  lastname: z.string({}).min(1, { message: 'Last Name cannot be empty' }),
  email: z.string({}).email({ message: 'Look like this is not email' }),
  password: z.string({}).min(1, { message: 'Password cannot be empty' })
})

function App() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    }
  })

  const {
    formState: { errors }
  } = form

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    form.reset()
  }

  return (
    <div className='min-h-screen bg-[hsl(0.44,_100%,_73.53%)] flex justify-center bg-[url("./assets/bg-intro-mobile.png")] lg:bg-[url("./assets/bg-intro-desktop.png")]'>
      <section className='w-[327px] font-poppins mt-[92px] xl:h-max xl:w-[1106px] xl:flex xl:items-start xl:justify-between xl:mt-[76px]'>
        <div className='w-full text-center text-white grid gap-y-6 xl:w-[496px] xl:text-left xl:gap-y-[30px]'>
          <h2 className='text-[26px] font-bold tracking-[.7px] leading-[34px] xl:text-[50px] xl:leading-[53px] xl:tracking-[-.5px] xl:mt-[220px]'>
            Learn to code by watching others
          </h2>
          <p className='leading-[26px]'>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div className='w-full grid gap-y-6 mt-16 xl:mt-0 xl:w-[540px]'>
          <Button className='block whitespace-normal w-full h-[88px] bg-[hsl(246.84,_31.98%,_48.43%)] text-white text-center text-[15px] leading-[25px] px-14 shadow-[0_6px_0px_hsl(0,_61.05%,_62.75%)] hover:bg-[hsl(246.84,_31.98%,_48.43%,_0.8)] xl:h-16'>
            <span className='font-bold '>Try it free 7 days </span> then $20/mo.
            thereafter
          </Button>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='w-full px-6 bg-white py-6 space-y-4 rounded-[10px] shadow-[0_6px_0px_hsl(0,_61.05%,_62.75%)] xl:px-10 xl:py-9'
            >
              <FormField
                control={form.control}
                name='firstname'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className='relative'>
                        <Input
                          placeholder='First Name'
                          className={cn(
                            'border-gray-400 border-[1px] h-14 px-5 focus-visible:ring-1  focus-visible:ring-offset-0',
                            {
                              'border-red-500 border-2 focus-visible:ring-red-500':
                                errors.firstname
                            }
                          )}
                          {...field}
                        />
                        {errors.firstname && (
                          <img
                            src={iconError}
                            alt='icon-error'
                            className='absolute right-8 top-1/2 -translate-y-1/2'
                          />
                        )}
                      </div>
                    </FormControl>
                    <FormMessage className='italic text-right' />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='lastname'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className='relative'>
                        <Input
                          placeholder='Last Name'
                          className={cn(
                            'border-gray-400 border-[1px] h-14 px-5 focus-visible:ring-1  focus-visible:ring-offset-0',
                            {
                              'border-red-500 border-2 focus-visible:ring-red-500':
                                errors.lastname
                            }
                          )}
                          {...field}
                        />
                        {errors.lastname && (
                          <img
                            src={iconError}
                            alt='icon-error'
                            className='absolute right-8 top-1/2 -translate-y-1/2'
                          />
                        )}
                      </div>
                    </FormControl>

                    <FormMessage className='italic text-right' />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className='relative'>
                        <Input
                          type='email'
                          placeholder='Email Address'
                          className={cn(
                            'border-gray-400 border-[1px] h-14 px-5 focus-visible:ring-1  focus-visible:ring-offset-0',
                            {
                              'border-red-500 border-2 focus-visible:ring-red-500':
                                errors.email
                            }
                          )}
                          {...field}
                        />
                        {errors.email && (
                          <img
                            src={iconError}
                            alt='icon-error'
                            className='absolute right-8 top-1/2 -translate-y-1/2'
                          />
                        )}
                      </div>
                    </FormControl>
                    <FormMessage className='italic text-right' />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className='relative'>
                        <Input
                          placeholder='Password'
                          type='password'
                          className={cn(
                            'border-gray-400 border-[1px] h-14 px-5 focus-visible:ring-1  focus-visible:ring-offset-0',
                            {
                              'border-red-500 border-2 focus-visible:ring-red-500':
                                errors.password
                            }
                          )}
                          {...field}
                        />
                        {errors.password && (
                          <img
                            src={iconError}
                            alt='icon-error'
                            className='absolute right-8 top-1/2 -translate-y-1/2'
                          />
                        )}
                      </div>
                    </FormControl>

                    <FormMessage className='italic text-right' />
                  </FormItem>
                )}
              />
              <Button
                type='submit'
                className='w-full uppercase h-[52px] bg-[hsl(153.42,_59.36%,_50.78%)] shadow-[0_6px_0px_hsl(154.35,_58.97%,_45.88%)] text-base pt-[14px] tracking-[.5px] hover:bg-[hsl(153.42,_59.36%,_50.78%,_0.8)]'
              >
                Claim your free trial
              </Button>

              <p className='text-center text-gray-400 text-[11px] mx-5 leading-[19px]'>
                By clicking the button, you are agreeing to our{' '}
                <span className='text-[hsl(2.31,_52.7%,_70.98%)] font-semibold'>
                  Terms and Services
                </span>
              </p>
            </form>
          </Form>
        </div>
      </section>
    </div>
  )
}

export default App
