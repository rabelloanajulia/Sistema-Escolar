// Cole aqui os dados do seu projeto Supabase.
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://hywuotesriokjbdktmyj.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_7GX7mG8FWyBaS1lsXuLy0Q_XqH6EVYq";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
