'use client';

import React, { useState } from 'react'
import * as z from 'zod';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
    name: z.string(),
    documentType: z.enum(["cnpj", "cpf"]),    
    documentNumber: z.string()
});

export default function NovaOrganizacaoPage() {

    const router = useRouter();
    const [loading, setLoading] = useState(false);

    // Função para fazer a chamada POST para a API
    const postFormData = async (formData: z.infer<typeof formSchema>) => {
        try {
            setLoading(true);
            const response = await axios.post('http://localhost:8086/api/organizations', formData);
            console.log('Resposta da API:', response.data);
            // Trate aqui a resposta de sucesso
            // Por exemplo, redirecionar o usuário ou mostrar uma mensagem de sucesso

            router.refresh();
            router.push(`/admin/organizacoes`);

        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Erro na resposta da API:', error.response?.data);
                // Trate aqui o erro da resposta da API
                // Por exemplo, mostrar uma mensagem de erro para o usuário
            } else {
                console.error('Erro ao fazer a requisição:', error);
                // Trate aqui erros que não são da resposta da API
            }
        } finally {
            setLoading(false);
        }
    };

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            documentNumber: ""
        }
    });

    const documentType = form.watch("documentType");

    const handleSubmit = (values: z.infer<typeof formSchema>) => {
        console.log({ values });
        postFormData(values);
    };

    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <Form {...form}>
                <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="max-w-md w-full flex flex-col gap-4"
                >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => {
                    return (
                        <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                            <Input
                            disabled={loading}
                            placeholder="Nome"
                            {...field}
                            />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    );
                    }}
                />
                <FormField
                    control={form.control}
                    name="documentType"
                    render={({ field }) => {
                    return (
                        <FormItem>
                        <FormLabel>Document type</FormLabel>
                        <Select onValueChange={field.onChange} disabled={loading}>
                            <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a document type" />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="cnpj">CNPJ</SelectItem>
                                <SelectItem value="cpf">CPF</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                        </FormItem>
                    );
                    }}
                />
                <FormField
                    control={form.control}
                    name="documentNumber"
                    render={({ field }) => {
                    return (
                        <FormItem>
                        <FormLabel>Document number</FormLabel>
                        <FormControl>
                            <Input 
                            disabled={loading}
                            placeholder="Document number" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    );
                    }}
                />
                <Button disabled={loading} type="submit" className="w-full">
                    Enviar
                </Button>
                </form>
            </Form>
        </main>
    )
}
