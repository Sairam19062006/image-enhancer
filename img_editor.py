from PIL import Image, ImageFilter,ImageEnhance
import os

path = './images'

pathto = './enhancedimages'

if not os.path.exists(pathto):
    os.makedirs(pathto)

for filename in os.listdir(path):

    if filename.endswith(('jpg','pgn','jpeg')):

        img = Image.open(f'{path}/{filename}')

        img = img.convert('RGB')

        edit = img.filter(ImageFilter.SHARPEN)

        factor = 1.2

        enhancer = ImageEnhance.Contrast(edit)

        edit = enhancer.enhance(factor)

        cl_name = os.path.splitext(filename)[0]

        edit.save(f'{pathto}/{cl_name}_enhanced.jpg')

print("Loading.....\nEnhancement Completed")
