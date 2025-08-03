'use client';
import ContactForm from '@/app/contact/ContactForm';
import ContactSlider from '@/app/contact/ContactSlider';
// import SearchForm from '@/components/SearchForm';

export default function ContactPage() {
    return (
        <main>
            <ContactSlider />
            {/*<SearchForm />*/}
            <ContactForm />
        </main>
    );
}
