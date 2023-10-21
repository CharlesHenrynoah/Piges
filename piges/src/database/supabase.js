import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ufrzrpsikujqyguvndbi.supabase.co'; // remplacer par votre URL Supabase
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmcnpycHNpa3VqcXlndXZuZGJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYwNjI4NTYsImV4cCI6MjAxMTYzODg1Nn0.qJncWuFxuzQPs6VWZqW220JZvKi3lcU6BfKcA9PSJkk'; // remplacer par votre clé publique anonyme

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
