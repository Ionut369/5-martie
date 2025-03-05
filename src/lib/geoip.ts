import { supabase } from './supabase';

interface GeoIPResponse {
  country_code: string;
}

export async function getUserCountry(): Promise<string | null> {
  try {
    const response = await fetch('https://api.ipapi.com/check?access_key=YOUR_API_KEY');
    const data: GeoIPResponse = await response.json();
    return data.country_code;
  } catch (error) {
    console.error('Error detecting user country:', error);
    return null;
  }
}