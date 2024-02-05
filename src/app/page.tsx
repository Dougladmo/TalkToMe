import Header from '@/components/Header'
import FormWrapper from '@/components/FormWrapper';


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex items-center justify-center flex-1 w-full h-full mx-auto ">
        <FormWrapper />
      </div>
    </main>
  );
}
