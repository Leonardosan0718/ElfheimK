import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const bestiario = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/bestiario" }),
  schema: z.object({
    name: z.string(),
    reino: z.string(), 
    lugar: z.string(), 
    image: z.string().optional(),
  }),
});

const reinos = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/reinos" }),
  schema: z.object({
    nombre: z.string(),
    descripcion_corta: z.string().optional(),
    imagen: z.string().optional(), 
  }),
});

const dioses = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/dioses" }),
  schema: z.object({
    nombre: z.string(),
    elemento: z.string(), 
    imagen: z.string().optional(),
  }),
});

const razas = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/razas" }),
  schema: z.object({
    nombre: z.string(),
    reino: z.string(),
    salud: z.number(),
    resistencia: z.number(),
    fuerza: z.number(),
    velocidad: z.number(),
    mana: z.number(),
    imagen: z.string().optional(),
  }),
});

const clases = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/clases" }),
  schema: z.object({
    nombre: z.string(),
    reino: z.string(),
    pasiva_nombre: z.string().optional(),
    imagen: z.string().optional(),
  }),
});


const lugares = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/lugares" }),
  schema: z.object({
    nombre: z.string(),
    reino: z.string(),
    imagen: z.string().optional(),
    tipo: z.string().optional(), 
  }),
});

// Asegúrate de incluir 'lugares' en el export final
export const collections = { dioses, bestiario, reinos, razas, clases, lugares };
