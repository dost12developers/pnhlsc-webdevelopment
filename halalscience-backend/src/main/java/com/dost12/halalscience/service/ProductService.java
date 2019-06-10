package com.dost12.halalscience.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dost12.halalscience.domain.Product;
import com.dost12.halalscience.domain.ProjectTask;
import com.dost12.halalscience.repository.ProductRepository;
import com.dost12.halalscience.repository.ProjectTaskRepository;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Product saveOrUpdateProduct(Product product){

        return productRepository.save(product);
    }


    public Iterable<Product> findAll(){
        return productRepository.findAll();
    }

    public Product findById(Long id){
        return productRepository.getById(id);
    }

    public void delete(Long id){
    	Product product = findById(id);
        productRepository.delete(product);
    }
}
