package com.Starapp.Starapp.service;

import com.Starapp.Starapp.dto.response.ManagerRequest;
import com.Starapp.Starapp.dto.response.ResourceRequest;

import java.util.List;

public interface RequestService {
	List<ManagerRequest> getAllResourceRequestForManager(String email);
	List<ResourceRequest> getAllResourceRequest(String email);
}
