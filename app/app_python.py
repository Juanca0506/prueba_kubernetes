import tkinter as tk
from tkinter import messagebox

def mostrar_mensaje():
    messagebox.showinfo("Mensaje", "Hola, esta es una aplicación de prueba")

root = tk.Tk()
root.title("Aplicación de Prueba")

boton = tk.Button(root, text="Mostrar Mensaje", command=mostrar_mensaje)
boton.pack(pady=20)

root.mainloop()