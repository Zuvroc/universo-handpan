'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const categorias = [
  { value: 'clases', label: 'Clases' },
  { value: 'cursos', label: 'Cursos' },
  { value: 'eventos', label: 'Eventos' },
  { value: 'tienda', label: 'Tienda' },
  { value: 'alquiler', label: 'Alquiler' },
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    categoria: '',
    mensaje: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ nombre: '', email: '', categoria: '', mensaje: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="nombre">Nombre *</Label>
          <Input
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            placeholder="Tu nombre"
            disabled={status === 'submitting'}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="tu@email.com"
            disabled={status === 'submitting'}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="categoria">Categoría *</Label>
        <Select
          value={formData.categoria}
          onValueChange={(value) => setFormData((prev) => ({ ...prev, categoria: value }))}
          disabled={status === 'submitting'}
        >
          <SelectTrigger>
            <SelectValue placeholder="Seleccioná una categoría" />
          </SelectTrigger>
          <SelectContent>
            {categorias.map((cat) => (
              <SelectItem key={cat.value} value={cat.value}>
                {cat.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="mensaje">Mensaje *</Label>
        <Textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Contanos en qué podemos ayudarte..."
          disabled={status === 'submitting'}
        />
      </div>

      <Button type="submit" className="w-full" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Enviando...' : 'Enviar mensaje'}
      </Button>

      {status === 'success' && (
        <div className="text-center text-green-600 dark:text-green-400">
          ¡Mensaje enviado! Te responderemos pronto.
        </div>
      )}
      {status === 'error' && (
        <div className="text-center text-red-600 dark:text-red-400">
          Hubo un error al enviar. Por favor, intentá de nuevo.
        </div>
      )}
    </form>
  );
}