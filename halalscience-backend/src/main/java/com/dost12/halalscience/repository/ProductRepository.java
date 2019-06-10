package com.dost12.halalscience.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.dost12.halalscience.domain.Product;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {

    Product getById(Long id);
}
