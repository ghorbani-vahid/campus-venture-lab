import fs from 'node:fs/promises';
import {build} from 'esbuild';
const result=await build({entryPoints:['src/main.jsx'],bundle:true,write:false,minify:true,format:'iife',target:['es2020'],outdir:'dist',define:{'process.env.NODE_ENV':'"production"'}});
const js=result.outputFiles.find(f=>f.path.endsWith('.js')).text,css=result.outputFiles.find(f=>f.path.endsWith('.css')).text;
const workbook=(await fs.readFile('reference/Campus_Venture_Model.xlsx')).toString('base64');
const html=`<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Campus Venture Lab — Vahid Ghorbani</title><style>${css}</style></head><body><div id="root"></div><script>window.downloadWorkbook=()=>{const a=document.createElement('a');a.href='data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,${workbook}';a.download='Campus_Venture_Model.xlsx';a.click();};</script><script>${js.replaceAll('</script','<\\/script')}</script></body></html>`;
await fs.mkdir('dist',{recursive:true});await fs.writeFile('dist/Campus_Venture_Lab.html',html);console.log(`Built offline React demo (${Math.round(Buffer.byteLength(html)/1024)} KB)`);
